import React, { useState, useEffect, useRef } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { InputAdornment } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InfiniteScroll from "react-infinite-scroller";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PageWrapper from "~/components/PageWrapper";
import CardBox from "./Card";
import { User } from "~/interfaces/User";

const gitHubUrl =
  "https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json";

const Home: NextPage = () => {
  const router = useRouter();

  const [currentpage, setSurrentpage] = useState(1);
  const [userData, setUserData] = useState<User[]>();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setselected] = useState<User[]>([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  }, [router?.query]);

  const getGitHubUserWithFetch = async () => {
    setLoading(true);
    const response = await axios.get(gitHubUrl);
    const { search: searchQ } = router?.query;
    setSearch(searchQ?.toString() || "");
    setUserData(
      response.data.filter(
        (item: User) =>
          item?.name?.toLowerCase().includes(searchQ?.toString() || "") ||
          item?.address?.toLowerCase().includes(searchQ?.toString() || "") ||
          item?.city?.toLowerCase().includes(searchQ?.toString() || "") ||
          item?.email?.toLowerCase().includes(searchQ?.toString() || "") ||
          item?.title?.toLowerCase().includes(searchQ?.toString() || "")
      )
    );
    setLoading(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLowerCase());
    router.push(
      {
        pathname:
          event.target.value.length > 0
            ? "/search/" +
              event.target.value.replace(/\s+/g, "%20").toLowerCase()
            : "/",
      },
      undefined,
      { shallow: true }
    );
    event.preventDefault();
  };

  const fetchData = () => setSurrentpage(currentpage + 1);

  const handleClick = (item: User) => {
    const info = selected.find((field) => field === item);

    info
      ? setselected(selected.filter((field) => field !== item))
      : setselected([...selected, item]);
  };

  return (
    <PageWrapper>
      <Container maxWidth="sm">
        {loading ? (
          <div className="loader" key={0}>
            Loading ...
          </div>
        ) : (
          <Box sx={{ maxWidth: "100%" }}>
            <TextField
              inputRef={(input) => input && input.focus()}
              fullWidth
              label="Search"
              id="Search"
              onChange={handleChange}
              value={search}
              focused
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}

        <InfiniteScroll
          pageStart={0}
          loadMore={fetchData}
          hasMore={userData && userData?.length > currentpage * 10}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {userData?.slice(0, currentpage * 10).map((item, index) => (
            <CardBox
              key={index}
              item={item}
              index={index}
              selected={selected.find((field) => field === item)}
              search={search}
              handleClick={handleClick}
            />
          ))}
        </InfiniteScroll>
      </Container>
    </PageWrapper>
  );
};

export default Home;
