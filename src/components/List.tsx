import { prependOnceListener } from "process";
import React from "react";

interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person, i) => {
      return (
        <li key={i} className="List">
          <div className="List-eader">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

// Instead of passing props we can define it as a function component (FC) as above
// const List = (props: IProps) => {
//   return <div>I am a list</div>;
// };

export default List;
