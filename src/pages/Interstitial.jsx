import { useEffect, useState } from "react";

import PleaseWait from "../components/global/PleaseWait";
import NotFound from "../components/global/NotFound";
import { getShortUrl } from "../util/db";

function Interstitial() {
  const [isWaiting, setIsWaiting] = useState(true);

  useEffect(() => {
    let path = "https://go.hadna.space" + window.location.pathname;
    getShortUrl(path).then((res) => {
      if (res.data.hasOwnProperty("short_url")) {
        window.location.replace(res.data.destination);
      } else {
        setIsWaiting(false);
      }
    });
  }, []);

  if (isWaiting) return <PleaseWait></PleaseWait>;
  if (!isWaiting) return <NotFound></NotFound>;
}

export default Interstitial;
