import { Block } from "baseui/block"
import Common from "./Common"
import Flip from "./Shared/Flip"
import CropControls from "./Shared/CropControls"
import { Button, KIND, SIZE } from "baseui/button"
import useAppContext from "~/hooks/useAppContext"

const Image = () => {
  const { setActiveSubMenu } = useAppContext()

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
        <Button onClick={() => setActiveSubMenu('Filters')} kind={KIND.tertiary} size={SIZE.mini} >
          {/* <CropIcon size={20} /> */}
          Filtros
        </Button>
      </Block>
      <Block>
      </Block>
      <Common />
    </Block>
  )
}

export default Image
