import React, {useState} from "react";
import {Cereal} from "../types/Cereal";

type Args = {
    cereal: Cereal;
    submitted: (cereal: Cereal) => void;
}

const CerealForm = ({cereal, submitted}: Args) => {
    const [cerealState, setCerealState] = useState({...cereal});

    const onSubmit: React.MouseEventHandler<HTMLButtonElement> =
        async (e) => {
            e.preventDefault();
            submitted(cerealState);
        }

    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={cerealState.name}
                    onChange={(e) =>
                        setCerealState({ ...cerealState, name: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="manufacture">Manufacture</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Manufacture"
                    value={cerealState.manufacturer}
                    onChange={(e) =>
                        setCerealState({ ...cerealState, manufacturer: e.target.value })
                    }
                />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="rating">Rating</label>
                <textarea
                    className="form-control"
                    placeholder="Rating"
                    value={cerealState.rating}
                    onChange={(e) =>
                        setCerealState({ ...cerealState, rating: e.target.value })
                    }
                />
            </div>
            <button
                className="btn btn-primary mt-2"
                disabled={!cerealState.name || !cerealState.manufacturer}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    );
}

    export default CerealForm;

