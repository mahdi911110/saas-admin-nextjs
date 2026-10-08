import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "a1b2c3d4",
      amount: 250,
      status: "pending",
      email: "sara.ahmadi@example.com",
      user: "sara"
    },
    {
      id: "e5f6g7h8",
      amount: 480,
      status: "success",
      email: "reza.mohammadi@example.com",
      user: "reza"
    },
    {
      id: "i9j0k1l2",
      amount: 120,
      status: "processing",
      email: "mina.hosseini@example.com",
      user: "mina"
    },
    {
      id: "m3n4o5p6",
      amount: 75,
      status: "failed",
      email: "ali.karimi@example.com",
      user: "ali"
    },
    {
      id: "q7r8s9t0",
      amount: 300,
      status: "pending",
      email: "niloofar.rahimi@example.com",
      user: "niloofar"
    },
    {
      id: "u1v2w3x4",
      amount: 950,
      status: "success",
      email: "amir.tehrani@example.com",
      user: "amir"
    },
    {
      id: "y5z6a7b8",
      amount: 60,
      status: "processing",
      email: "parisa.naderi@example.com",
      user: "parisa"
    },
    {
      id: "c9d0e1f2",
      amount: 410,
      status: "failed",
      email: "hossein.abbasi@example.com",
      user: "hossein"
    },
    {
      id: "g3h4i5j6",
      amount: 180,
      status: "pending",
      email: "zahra.moradi@example.com",
      user: "zahra"
    },
    {
      id: "k7l8m9n0",
      amount: 720,
      status: "success",
      email: "omid.sharifi@example.com",
      user: "omid"
    },
    {
      id: "o1p2q3r4",
      amount: 90,
      status: "processing",
      email: "fateme.ebrahimi@example.com",
      user: "fateme"
    },
    {
      id: "s5t6u7v8",
      amount: 530,
      status: "failed",
      email: "mahdi.ghasemi@example.com",
      user: "mahdi"
    }
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className=" w-full py-10 px-5">
      <DataTable columns={columns} data={data} />
    </div>
  )
}