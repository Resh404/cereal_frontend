type Args = {
    status: "success" | "error" | "pending" | "idle"; // Add "idle" state
}

const ApiStatus = ({ status }: Args) => {
    switch (status) {
        case "error":
            return <div>Error fetching data from database</div>;
        case "pending":
            return <div>Loading..</div>;
        case "idle":
            return null; // No status to display when data is idle
        default:
            throw Error("Unknown api state");
    }
}

export default ApiStatus;
