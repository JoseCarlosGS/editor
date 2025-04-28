import { Block } from "baseui/block"
import Common from "./Common"
import Flip from "./Shared/Flip"
import CropControls from "./Shared/CropControls"

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
      </Block>
      <Block>
      </Block>
      <Common />
    </Block>
  )
}

export default Image
