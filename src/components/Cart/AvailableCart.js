import CardComponent from "../Card/Card";
import data from "../../data";

export const AvailableCart = () => {
  return (
    <div className="d-flex">
      <div className="mx-auto">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <CardComponent
                id={item.id}
                title={item.title}
                src={item.src}
                price={item.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
