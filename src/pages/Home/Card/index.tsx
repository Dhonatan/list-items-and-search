import React from "react";
import type { NextPage } from "next";
import { CardActionArea, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { User } from "~/interfaces/User";
import {
  CardStyle,
  CardActionStyle,
  CardImageStyle,
  CardContentStyle,
  BoxStyle,
  TypographyNameStyle,
  TypographyEmailStyle,
  TypographyTitleStyle,
  TypographyAddressStyle,
  ButtonSelectionStyle,
} from "./styled";

interface CardProps {
  item: User;
  selected?: User;
  search: string;
  index: number;
  handleClick: (item: User) => void;
}

const CardBox: NextPage<CardProps> = ({
  item,
  index,
  selected,
  search,
  handleClick,
}) => {
  return (
    <Card
      sx={{
        ...CardStyle,
        border: selected ? "1px solid #4765FF" : "",
      }}
      key={index}
      onClick={() => handleClick(item)}
    >
      <CardActionArea style={CardActionStyle}>
        <CardMedia
          component="img"
          height="140"
          image={item?.avatar?.split("?").toString()}
          alt="green iguana"
          style={CardImageStyle}
        />
        <CardContent style={CardContentStyle}>
          <Box sx={BoxStyle}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={TypographyNameStyle}
            >
              {search ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.name
                      .toLowerCase()
                      .replace(
                        search.toLowerCase(),
                        "<span style='background: #FFF73B'>" +
                          search +
                          "</span>"
                      ),
                  }}
                />
              ) : (
                item.name
              )}
            </Typography>

            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={TypographyEmailStyle}
            >
              {search ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: item.email
                      .toLowerCase()
                      .replace(
                        search.toLowerCase(),
                        "<span style='background: #FFF73B'>" +
                          search +
                          "</span>"
                      ),
                  }}
                />
              ) : (
                item.email
              )}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            style={TypographyTitleStyle}
          >
            {search ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: item.title
                    .toLowerCase()
                    .replace(
                      search.toLowerCase(),
                      "<span style='background: #FFF73B'>" + search + "</span>"
                    ),
                }}
              />
            ) : (
              item.title
            )}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={TypographyAddressStyle}
          >
            {search ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: item.address
                    .toLowerCase()
                    .replace(
                      search.toLowerCase(),
                      "<span style='background: #FFF73B'>" + search + "</span>"
                    ),
                }}
              />
            ) : (
              item.address
            )}
            ,{" "}
            {search ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: item.city
                    .toLowerCase()
                    .replace(
                      search.toLowerCase(),
                      "<span style='background: #FFF73B'>" + search + "</span>"
                    ),
                }}
              />
            ) : (
              item.city
            )}
          </Typography>
          {!selected && <Divider style={{ margin: "10px 0" }} />}
          <Typography
            variant="body2"
            color="text.secondary"
            style={ButtonSelectionStyle}
          >
            {selected ? "SKIP SELECTION" : "MARK AS SIUTABLE"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBox;
