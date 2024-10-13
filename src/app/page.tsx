"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import { SendTransaction } from "@/app/send-transaction";
import { ReadContract } from "@/app/react-contract";
import { WriteContract } from '@/app/react-write-contract';

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
      <div>
        <h2>Send Transaction</h2>
        <SendTransaction />
      </div>
      <div>
        <h2>Read Contract</h2>
        <ReadContract />
      </div>
      <div>
        <h2>Write Contract</h2>
        <WriteContract/>
      </div>
    </>
  );
}

export default App;
