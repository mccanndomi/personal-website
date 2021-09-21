import "./Pill.css";

export const Pill = ({ info }) => {
  const colors = new Map();

  colors.set("WIP", "#F8EB7D");
  colors.set("Mobile", "#95C359");
  colors.set("Live", "#F87D84");
  colors.set("Website", "#A159C3");
  colors.set("Fake", "#576bc5");

  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: colors.get(info),
        fontSize: 10,
        color: "white",
        margin: 4,
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        height: 12,
      }}
    >
      <p
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        {info}
      </p>
    </div>
  );
};
