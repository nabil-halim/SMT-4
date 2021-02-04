import Listsiswa from "./Listsiswa";

function Siswa() {
  const nama = ['joni','budi','siti'];
    return (
      <div className="App">
        <Listsiswa judul={nama} />
      </div>
    );
  }
  
  export default Siswa;