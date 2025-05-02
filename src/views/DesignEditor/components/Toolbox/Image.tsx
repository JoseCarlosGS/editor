import { Block } from "baseui/block"
import Common from "./Common"
import Flip from "./Shared/Flip"
import CropControls from "./Shared/CropControls"
import { Button, KIND, SIZE } from "baseui/button"
import useAppContext from "~/hooks/useAppContext"
import useSetIsSidebarOpen from "~/hooks/useSetIsSidebarOpen"
import { SlidersHorizontal } from "lucide-react"

const Image = () => {
  const { setActiveSubMenu } = useAppContext()
  const setIsSideBarOpen = useSetIsSidebarOpen()

  return (
    <Block
      $style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0 12px",
        justifyContent: "space-between",
      }}
    >
      <Block
        $style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          justifyContent: "space-between",
        }}>
        <Flip />
        <CropControls />
        <Button onClick={() => {
          setIsSideBarOpen(true);
          setActiveSubMenu('Filters');

        }} kind={KIND.tertiary} size={SIZE.mini} >
          {/* <CropIcon size={20} /> */}
          Filtros
        </Button>
        <Button onClick={() => {
          setIsSideBarOpen(true);
          setActiveSubMenu('ImageSettings');

        }} kind={KIND.tertiary} size={SIZE.mini} >
          {/* <CropIcon size={20} /> */}
          <SlidersHorizontal size={20} />
        </Button>
      </Block>
      <Block>
      </Block>
      <Common />
    </Block>
  )
}

export default Image
