function AddBtn() {
  const test=()=>{
    alert('hi')
  }
  return (
    <div>
      <img onClick={test} style={style.fab} src="/icons/add.png" alt="image" />
    </div>
  );
}

export default AddBtn;

const style = {
  fab: {
    width: "50px", // Set width
    height: "50px", // Set height
    position: "fixed",
    bottom: "2%",
    right: "2%",
  },
};
