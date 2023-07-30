import { Pagination } from 'antd';

const LibraryPagination =({ total, top, onChangePage, bottom })=>{
  return (
      <Pagination defaultCurrent={1} total={total} style={{ textAlign:'center', marginTop:top,marginBottom:bottom }}
                  onChange={(e)=> onChangePage(e)} showSizeChanger={false}/>
  )
}

export default LibraryPagination;