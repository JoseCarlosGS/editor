import { Block } from "baseui/block"
import Common from "./Common"
import Flip from "./Shared/Flip"
import CropControls from "./Shared/Crop"

const Image = () => {
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
      <Block>
        <Flip />
        <CropControls />
      </Block>
      <Common />
    </Block>
  )
}

export default Image
