import "./App.css";

const posts = [
  {
    title: "5 Best Crypto Performers During The 2022 Market Flop",
    slug: "5-best-crypto-performers-during-the-2022-market-flop",
    category: "Crypto News",
    updatedAt: "21 hours ago",
  },
  {
    title: " Top crypto funding stories of 2022  ",
    slug: "top-crypto-funding-stories-of-2022",
    category: "New Year Special",
    updatedAt: "a day ago",
  },
  {
    title: " 2023 will see the death of play-to-earn gaming ",
    slug: "2023-will-see-the-death-of-playtoearn-gaming",
    category: " Opinion",
    updatedAt: "a day ago",
  },
  {
    title: " US lawmakers under pressure following FTX collapse: Report  ",
    slug: "us-lawmakers-under-pressure-following-ftx-collapse-report",
    category: " News",
    updatedAt: "2 days ago",
  },
  {
    title:
      "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
    slug: "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
    category: "Interviews",
    updatedAt: "2 days ago",
  },
];

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Blog List</h1>
        <div className="table-responsive-sm ">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Titles</th>
                <th>Slug</th>
                <th>Category</th>
                <th>Times</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.title}</td>
                  <td>{data.slug}</td>
                  <td>{data.category}</td>
                  <td>{data.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
