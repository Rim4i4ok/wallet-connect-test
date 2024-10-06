import { createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = "PROJECT_ID";

export const config = createConfig({
  chains: [
    mainnet,
    // base
  ],
  connectors: [
    // injected(),
    walletConnect({ projectId }),
    // metaMask(),
    // safe()
  ],
  transports: {
    [mainnet.id]: http(),
  },
});
