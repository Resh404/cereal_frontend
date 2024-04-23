type Args = {
    status: "success" | "error" | "pending";
}

const ApiStatus = ({status}: Args) => {
    switch (status) {
        case "error":
            return <div>Error fetching data from database</div>;
        case "pending":
            return <div>Loading..</div>;
        default:
            throw Error("Unknown api state");
    }
}

export default ApiStatus