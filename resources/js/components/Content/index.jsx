import React from 'react'
import { Table,Radio  } from 'antd';

import 'antd/dist/antd.css';

function Content() {

    const baseURL = process.env.MIX_APP_URL;


console.log("url:"+baseURL)

    const [info, setInfo] = React.useState([])

    React.useEffect(() => {
        fetch(`${baseURL}/api/v1/divisions`)
        .then(response => response.json())
        .then(data => setInfo(data))
    },[])

    const handleRadio = () => {
        console.log("click")
    }
    console.log(info)

    console.log("estadoActual:"+ info)

    const columns = [
        {
          title: 'División',
          dataIndex: 'division',
          filters: [
            {
              text: 'Strategy',
              value: 'Strategy',
            },
            {
              text: 'Producto',
              value: 'Producto',
            },
            {
              text: 'Dirección general',
              value: 'dir_general',
            },
            {
                text: 'Operaciones',
                value: 'operaciones',
            },
            {
                text: 'CEO',
                value: 'ceo',
            },
          ],
          filterMode: 'tree',
          filterSearch: true,

          sorter: (a, b) => a.division.length - b.division.length,
          sortDirections: ['descend'],

          onFilter: (value, record) => record.name.includes(value),
          width: '25%',
        },
        {
            title: 'División Superior',
            dataIndex: 'div_sup',

          sorter: (a, b) => a.div_sup.length - b.div_sup.length,


            width: '20%',
          },
        {
          title: 'Colaboradores',
          dataIndex: 'colaboradores',
          sorter: (a, b) => a.colaboradores - b.colaboradores,
        },
        {
            title: 'Nivel',
            dataIndex: 'nivel',
            sorter: (a, b) => a.nivel - b.nivel,
          },
          {
            title: 'Subdivisiones',
            dataIndex: "totalsubdivisones",
            width: '15%',
            sorter: (a, b) => a.totalsubdivisones - b.totalsubdivisones,
          },
        {
          title: 'Embajadores',
          dataIndex: 'embajador',


          filterSearch: true,
          width: '25%',
        },
      ];

      const data = [/*

        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        }, */
      ];
      let pagination = {
        current: 1,
        pageSize: 10,
      }
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }
    return (
        <div className="tabla">
            <div className="tabla__header">
                    <Radio.Group value="listado" onChange={handleRadio} style={{ marginBottom: 16 }}>
                        <Radio.Button value="listado">Listado</Radio.Button>
                        <Radio.Button value="arbol">Árbol</Radio.Button>
                    </Radio.Group>
            </div>
            <div className="tabla__content">
            <Table showTotal="100" columns={columns} dataSource={info.data} rowKey="id" onChange={onChange} />
            <em>10 per page</em>

            </div>
        </div>
    )
}

export default Content
