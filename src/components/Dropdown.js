export default function Dropdown(prop) {
    
    return (
      <div className="Dropdown">
        {prop.value === true ? (
          <>true that</>
        ) : (<>false news</>)}
      </div>
    );
  }