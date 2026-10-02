//union

let subsCount: number | string = "1m";

let airlineSeat: "asile" | "window" | "midddle";
airlineSeat = "window";

const orders = ["34", "56", "52", "89"];

let orderCount: string | undefined;

for (let order of orders) {
  if (order == "52") {
    orderCount = order;
  }
}

console.log(orderCount);

// making our own type in TS;

type chairOrder = {
  item: string;
  sugar: number;
};

// using this type

function isChaiOrder(obj: any): obj is chairOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.number === "number"
  );
}

function serverOrder(item: chairOrder | string) {
  if (isChaiOrder(item)) {
    return `serving chai item is ${item.item} and the sugar is ${item.sugar}`;
  }

  // if item is string in the code process
  return `serving custom chai ${item}`;
}

// calling the serve order;

const value = {
  item: "masala cahi",
  sugar: 5,
};

serverOrder(value);

// making the custon type

type lemonChai = { type: "lemon"; spiceLevel: number };
type gingerChai = { type: "ginger"; qunatity: number };
type elacichiChai = { type: "elaichi"; aroma: number };

type chai = lemonChai | gingerChai | elacichiChai;

function serverChai(orderChai: chai) {
  switch (orderChai.type) {
    case "lemon":
      return `lemon chai is on the way please wait some time`;
      break;
    case "ginger":
      return `ginger is chai is on the way`;
      break;
    case "elaichi":
      return "elaichi is on the way";
      break;
    default:
      break;
  }
}
