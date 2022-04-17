import {useState} from 'react'
function Cafe(props) {
    const [angka, setAngka] = useState(1);
    const ubahAngka = () => {
        setAngka(angka + 1);
    }
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Cafe miegi</h4>
                <p className="card-text">Nama barang : {props.barang}</p>
                <p className="card-text">Total barang : {angka}</p>
                <button onClick={ubahAngka}>Tambah</button>
            </div>
        </div>
    )
}
export default Cafe;