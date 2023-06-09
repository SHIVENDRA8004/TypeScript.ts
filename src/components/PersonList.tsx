type nameListType = {
  nameList: {
    first: string;
    last: string;
  }[];
};
const PersonList = (props: nameListType) => {
  return (
    <div>
      {" "}
      {props.nameList.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
