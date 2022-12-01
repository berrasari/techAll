import React from "react";
    import { useQuery } from "@apollo/client";
    const Query = ({ children, query }) => {
      const { data, loading, error } = useQuery(query);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {JSON.stringify(error)}</p>;
      return children({data} );
    };
    export default Query;