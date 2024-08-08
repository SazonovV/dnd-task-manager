import Image from "next/image";
import DnDTable from '@/components/DnDTable/DnDTable';
import client from '@/lib/mongodb';

type ConnectionStatus = {
  isConnected: boolean;
};

async function getData() {
  try {
    console.log(1);
    await client.connect(); // `await client.connect()` will use the default database passed in the MONGODB_URI
    console.log(2);
    return { isConnected: true }

  } catch (e) {
    console.error(e);
    return  { isConnected: false }
  }
}
export default async function Home() {
  const { isConnected } = await getData();
  return (<>
    <DnDTable></DnDTable>
    {isConnected ? (
      <h2 className="text-lg text-green-500">
        You are connected to MongoDB!
      </h2>
    ) : (
      <h2 className="text-lg text-red-500">
        You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
        for instructions.
      </h2>
    )}
    </>);
}
