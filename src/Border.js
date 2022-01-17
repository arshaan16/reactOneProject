import "./Border.css";
function Border(props){
  let borders="border "+props.className;
//  console.log(props.children);
  return(
    <div className={borders}>{props.children}</div>
  )
}
export default Border;