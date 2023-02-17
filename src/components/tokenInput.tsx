import { KeyboardEvent, useState } from "react";
import { setGlobalApiKey } from "../services/weatherServices";
import { toast } from "react-toastify";

const TokenInput = () => {
  const [apiKey, setApiKey] = useState<string>("");

  const handleApiKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      setGlobalApiKey(apiKey);
      toast.success("Token set");
    }
  };
  return (
    <div>
      <label htmlFor="api" className="m-2 font-bold">
        API Key
      </label>
      <input
        name="api"
        type="text"
        placeholder="Api Key"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        onKeyDown={(e) => {
          handleApiKeyDown(e);
        }}
        className="  w-30 h-10 rounded bg-white outline-none text-gray-700 pl-2 pr-7 font-bold"
      />
      <button
        onClick={() => {
          setGlobalApiKey(apiKey);
          toast.success("Token set");
        }}
        className="h-10 px-4 text-sm text-white bg-green-500 rounded-lg cursor-pointer hover:bg-green-600"
      >
        V
      </button>
    </div>
  );
};

export default TokenInput;
