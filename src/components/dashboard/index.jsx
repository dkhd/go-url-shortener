import { useState } from "react";
import validator from "validator";

import { createShortURL } from "../../util/shortener";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Shortener = (props) => {
  const [url, setUrl] = useState("");
  const [urlInvalid, setUrlInvalid] = useState(false);
  const [uid, setUid] = useState("");
  const [disable, setDisable] = useState(false);
  const [disableCopy, setDisableCopy] = useState(true);

  useEffect(() => {
    setUid(props.uid);
  }, [props.uid]);

  const inputHandler = (value) => {
    setUrl(value);
    setUrlInvalid(false);
    setDisableCopy(true);
  };

  const enterBtnHandler = (e) => {
    if (e.key === "Enter") {
      validate(url);
    }
  };

  const shortBtnHandler = () => {
    setDisable(true);
    validate(url);
  };

  const validate = async () => {
    if (
      (url.startsWith("http://") || url.startsWith("https://")) &&
      validator.isURL(url)
    ) {
      await createShortURL(uid, url).then((res) => {
        if (res.data.hasOwnProperty("short_url")) {
          setUrl(res.data.short_url);
          setDisableCopy(false);
        }
      });
    } else {
      setUrlInvalid(true);
    }
    setDisable(false);
  };

  const copyTextToClipboard = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(url);
    } else {
      document.execCommand("copy", true, url);
    }
    alert("Short URL successfully copied!");
  };

  return (
    <>
      <div className="flex flex-col h-full items-center mt-10">
        <div className="flex flex-row px-5 py-5 w-10/12 md:w-6/12 outline-none rounded-xl bg-white gap-3">
          <input
            onKeyDown={(e) => enterBtnHandler(e)}
            onChange={(e) => inputHandler(e.target.value)}
            className="input-url"
            type="text"
            placeholder="Paste your long URL here..."
            disabled={disable}
            className="w-full outline-none"
            value={url}
          />
          <button
            disabled={disableCopy}
            className="disabled:opacity-10"
            onClick={copyTextToClipboard}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            {/* )} */}
          </button>
        </div>
        {urlInvalid ? (
          <p className="text-dkhd-purple-200 text-center mt-3">
            <strong>Invalid URL!</strong>
            <br />
            Hint: always start with <code>http://</code> or{" "}
            <code>https://</code>
          </p>
        ) : (
          <p className="mt-3">
            &nbsp;
            <br />
            &nbsp;
          </p>
        )}
        <button
          onClick={shortBtnHandler}
          className="my-10 px-5 py-5 bg-yellow-400 hover:bg-yellow-200 rounded-xl disabled:opacity-50"
          disabled={disable}
        >
          Reducio!
        </button>
        <Link
          to="##"
          className="text-dkhd-purple-200 border-b-2 border-dkhd-purple-200 border-dashed font-bold"
        >
          Click to check history
        </Link>
      </div>
    </>
  );
};

export default Shortener;
