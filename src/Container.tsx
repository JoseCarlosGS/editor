import React, { useEffect, useRef, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"
import useAppContext from "~/hooks/useAppContext"
import Loading from "./components/Loading"
import { editorFonts } from "./constants/fonts"
import { getFonts } from "./store/slices/fonts/actions"
import { getPixabayResources } from "./store/slices/resources/actions"
import { getUploads } from "./store/slices/uploads/actions"
import { useAppDispatch } from "./store/store"
import api from "./services/api"
import Error403 from "./views/Errors/403"

const Container = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { isMobile, setIsMobile } = useAppContext()
  const [loaded, setLoaded] = useState(false)
  const dispatch = useAppDispatch()
  const [isAutenticated, setIsAutenticated] = useState(false)
  const updateMediaQuery = (value: number) => {
    if (!isMobile && value >= 800) {
      setIsMobile(false)
    } else if (!isMobile && value < 800) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id")
  const sessiontoken = sessionStorage.getItem('auth_token')

  useEffect(() => {
    if (!sessiontoken) {
      if (!id) return
      loadAuthentication(id);
      setTimeout(() => {
        setLoaded(true)
      }, 1000)
    } else {
      api.setAuthToken(sessiontoken);
      setIsAutenticated(true);
    }
  }, [])

  useEffect(() => {
    const containerElement = containerRef.current!
    const containerWidth = containerElement.clientWidth
    updateMediaQuery(containerWidth)
    const resizeObserver = new ResizeObserver((entries) => {
      const { width = containerWidth } = (entries[0] && entries[0].contentRect) || {}
      updateMediaQuery(width)
    })
    resizeObserver.observe(containerElement)
    return () => {
      if (containerElement) {
        resizeObserver.unobserve(containerElement)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(getFonts())
    dispatch(getUploads())
    dispatch(getPixabayResources())
    loadFonts()
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }, [])

  const loadFonts = () => {
    const promisesList = editorFonts.map((font) => {
      // @ts-ignore
      return new FontFace(font.name, `url(${font.url})`, font.options).load().catch((err) => err)
    })
    Promise.all(promisesList)
      .then((res) => {
        res.forEach((uniqueFont) => {
          if (uniqueFont && uniqueFont.family) {
            document.fonts.add(uniqueFont)
          }
        })
      })
      .catch((err) => console.log({ err }))
  }

  const loadAuthentication = async (id: string) => {
    const response = await api.getTokenById(id)
    if (response) {
      sessionStorage.setItem('auth_token', response.data);
      sessionStorage.setItem('persona_id', response.personaId);
      api.setAuthToken(response.data);
      setIsAutenticated(true);
    }
  }

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* {loaded ? <>{children} </> : <Loading />} */}
      {loaded ? (
        isAutenticated ? <>{children}</> : <Error403 />
      ) : (
        <Loading />
      )}
    </div>
  )

}

export default Container
