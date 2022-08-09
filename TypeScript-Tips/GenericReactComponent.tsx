import React from 'react';

/*

Making a Table Component that uses TypeScript generics to render any
data passed to it.

Twitter and GitHub @troygarseauh

Please roast my code / provide examples of how you'd solve 
or explain this better.

Let's grow together!

*/



interface TableData<TData> {
    data:TData[]; 
    renderedData:(data:TData)=>React.ReactNode;
}


export const Table = <TData,>(props:TableData<TData>)=>{
    return null;
};

export const TableComponent = () => {
  return (
   <>
    <Table
    data={[{id:"1", productName:"Gouda Cheese"}]}
    renderedData={(data) => {
        return null;
    }}
    ></Table>

    <Table
    data={[{id:"1", expensiveProduct:"Fancy Wine"}]}
    renderedData={(data) => {
        return null;
    }}
    ></Table>
   
   </>
  )
}
