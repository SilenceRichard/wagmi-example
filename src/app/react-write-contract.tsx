import * as React from "react";
import { useWriteContract } from "wagmi";

export function WriteContract() {
  const { data: hash, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const favoriteNum = formData.get("favoriteNum") as string;
    writeContract({
      address: "0x6CF01290e389c664edb2f3E921799dDEe6d5D305",
      abi: [
        {
          type: "function",
          name: "addPerson",
          inputs: [
            { name: "_name", type: "string", internalType: "string" },
            {
              name: "_favoriteNumber",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "favoriteNumber",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "nameTofavoriteNumber",
          inputs: [{ name: "", type: "string", internalType: "string" }],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "people",
          inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          outputs: [
            {
              name: "favoriteNumber",
              type: "uint256",
              internalType: "uint256",
            },
            { name: "name", type: "string", internalType: "string" },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "retrieve",
          inputs: [],
          outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "store",
          inputs: [
            {
              name: "_favoriteNumber",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
      ],
      functionName: "store",
      args: [BigInt(favoriteNum)],
    });
  }

  return (
    <form onSubmit={submit}>
      <input name="favoriteNum" placeholder="Input favorite Number" required />
      <button type="submit">Store</button>
      {hash && <div>Transaction Hash: {hash}</div>}
    </form>
  );
}
