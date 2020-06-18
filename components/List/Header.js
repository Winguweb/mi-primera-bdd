import Link from 'next/link'

const exportCsv = (info, fields) => {
  let csv = fields.reduce((acc, obj, i) => {
    if (i == 1) {
      acc = 'ID,' + acc.name + ','
    }
    acc += i === (fields.length - 1) ? obj.name + '\n' : obj.name  + ','
    return acc
  })

  info.forEach((infoObj) => {
    const simpleArrayData = Object.keys(infoObj).map((key) => {
      if(infoObj[key]) {
        return infoObj[key].name ? infoObj[key].name : infoObj[key]
      } else {
        return ' '
      }
    })
    csv += simpleArrayData.join(',')
    csv += '\n'
  })

  const hiddenElement = document.createElement('a');
  hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'reporte.csv';
  hiddenElement.click();    
}

const Header = ({ info, fields, name, cta }) => (
  <header className="w-full flex items-center justify-between">
    <h1 className="mr-4 inline-block border-b-4 border-yellow-wingu font-semibold text-2xl ">
      {name}
    </h1>
    <div className='flex'>
      <div className='mr-2'>
        <div onClick={() => { exportCsv(info, fields) }}>
          <a className="button cursor-pointer text-blue-wingu flex items-center justify-center w-full p-4 font-bold rounded border border-blue-wingu">
            Exportar
          </a>
        </div>
      </div>
      <div>
        <Link href={cta.link}>
          <a className="button text-white bg-blue-wingu flex items-center justify-center w-full p-4 font-bold rounded">
            {cta.title}
          </a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header