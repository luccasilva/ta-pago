import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TopNav } from "../../shared";
import { Typography } from "@mui/material";
import recordService from "../record/services/record-service";
import { RecordInterface } from "../../interfaces";
import RecordCard from "../record/record-card";

export default function Profile() {
  const { userId, name } = useParams<{ userId: string, name: string }>();
  const [records, setRecords] = useState<RecordInterface[]>([]);

  const fetchRecords = async () => {
    const reocordsData = await recordService.get({ userId: userId || "" });
    setRecords(reocordsData);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div>
      <Link to="/home">
        <TopNav />
      </Link>
      <div className="w-11/12 mx-auto mt-5">
        <Typography variant="h5" component="div">
          Ficha de {name}
        </Typography>
        <div className="mb-10" />
        <div>
          {records.map((record) => (
            <RecordCard key={record.recordId} record={record} />
          ))}
        </div>

      </div>
    </div>
  );
}
