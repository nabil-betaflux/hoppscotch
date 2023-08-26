import { HoppModule } from "."

export const showChat = () => {
  ;(window as any).$crisp.push([
    "do",
    "chat:show",
    (window as any).$crisp.push(["do", "chat:open"]),
  ])
}

export default <HoppModule>{
  onVueAppInit() {
    // TODO: Env variable this ?
    ;(window as any).$crisp = []
    ;(window as any).CRISP_WEBSITE_ID = ""
   
  },
}
