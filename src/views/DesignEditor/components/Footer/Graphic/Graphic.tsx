import React from "react"
import { styled } from "baseui"
import { Theme } from "baseui/theme"
import Common from "./Common"
import Scenes from "./Scenes"
import MyEditor from "./MovingButton"

const Container = styled<"div", {}, Theme>("div", ({ $theme }) => ({
  background: $theme.colors.white,
}))

const Graphic = () => {
  return (
    <Container>
      {/* <Scenes /> */}
      <MyEditor />
      <Common />
    </Container>
  )
}

export default Graphic
