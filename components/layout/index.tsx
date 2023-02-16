const Header = ({children, onClick}:any) => {
  return (
    <>
    <div style={{width:"100vw", height: "100px", backgroundColor: "black"}}>
        <button onClick={onClick}>Button</button>
    </div>
    {children}
    </>
  )
}

export default Header