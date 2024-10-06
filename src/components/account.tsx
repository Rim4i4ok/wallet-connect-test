import { useAccount, useBalance, useDisconnect, useEnsName } from "wagmi";
import { config } from "../wallet/config";

export function Account() {
  const { address } = useAccount({ config });
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({
    address: address,
  });

  const { data: balance } = useBalance({
    address: address,
  });

  return (
    <div>
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <br />
      balance : ${Number(balance?.value)}
      <br />
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
