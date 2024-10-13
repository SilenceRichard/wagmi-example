// 0x58841d155a56d309AAd85Ae421B1244F743C34E2
import { useReadContract } from "wagmi";

export function ReadContract() {
  const contract = useReadContract({
    // ...wagmiContractConfig,
    chainId: 1337,
    functionName: "favoriteNumber",
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
    // args: ["0x03A71968491d55603FFe1b11A9e23eF013f75bCF"],
  });
  const { data: favoriteNumber } = contract;
  console.log("contract:", contract);
  return <div>favoriteNumber: {favoriteNumber?.toString()}</div>;
}
