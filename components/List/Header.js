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
          <a className="button cursor-pointer text-purple-wingu flex items-center justify-center w-40 px-4 py-2 font-bold rounded-full border border-purple-wingu">
            Exportar
          </a>
        </div>
      </div>
      <div>
        <Link href={cta.link}>
          <a className="button text-white bg-purple-wingu flex items-center justify-center max-w-md px-4 py-2 font-bold rounded-full">
            {cta.title}
          </a>
        </Link>
      </div>
    </div>
  </header>
)

export default Header