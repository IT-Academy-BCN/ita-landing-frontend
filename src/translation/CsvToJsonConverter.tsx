import React, { useState } from "react";
import * as csv from "csvtojson";

const CSVtoJSONConverter: React.FC = () => {
  const [jsonContent, setJSONContent] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const csvData = event.target?.result as string;
        const jsonArray = await convertCSVtoJSON(csvData);
        setJSONContent(JSON.stringify(jsonArray, null, 2));
      };
      reader.readAsText(file);
    }
  };

  const convertCSVtoJSON = async (csvData: string) => {
    try {
      const jsonArray = await csv().fromString(csvData);
      return jsonArray;
    } catch (error) {
      console.error("Error converting CSV to JSON:", error);
      return [];
    }
  };

  const handleDownloadJSON = () => {
    if (jsonContent) {
      const blob = new Blob([jsonContent], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.json";
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div>
      <h1>CSV to JSON Converter</h1>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      {jsonContent && (
        <div>
          <button className="btn btn-primary" onClick={handleDownloadJSON}>Download JSON</button>
          <h2>JSON Output:</h2>
          <pre>{jsonContent}</pre>
        </div>
      )}
    </div>
  );
};

export default CSVtoJSONConverter;
