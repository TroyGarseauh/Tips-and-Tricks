
/** 

Making a React Component that uses TypeScript generics to render any
data passed to it.

Twitter and GitHub '@troygarseauh'

Please roast my code / provide examples of how you'd solve 
or explain this better.

Let's grow together!

*/



 /*

<T> means passed in type in TypeScript Generics. Here im calling it <TData>
to give the context as passed in data type.

****************************************************************************

First we make a  function that is assigned the Generic <TItem>. Im pretending
to make a Table Component to display products so we'll call this function 
Table.


export const Table = <TData,>(props:TableData<TData>)=>{
    return null; 
};

This is how we pass <TData> to our interface we're passing it as a variable.

****************************************************************************

Now we can make our TableData interface

interface TableData<TData>{
    items:TData[]; Now we use <TData> and assign it to items 
    renderedData:(item:TData)=>React.ReactNode; Here we're saying render this item out 
}

****************************************************************************

Without Generics our TableData interface would look like this if we new we 
passing in an id and productName

interface TableData{
  data:{id:string; productName:string}[];
  renderedData:(data:{id:string;
  productName:string})=>React.ReactNode;
  
}

Without Generics, the data we pass isnt flexible it can only accept an id and 
productName thats not what we want.


****************************************************************************

Now we can create our TableComponent that can accept any data passed to item!

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
    data={[{id:"2", expensiveProduct:"Fancy Wine"}]}
    renderedData={(data) => {
        return null;
    }}
    ></Table>
    

    </>
  )
}
*/
