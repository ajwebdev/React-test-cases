import { render } from "@testing-library/react";
import FollowersList from "./FollowersList";
import { BrowserRouter as MemoryRouter } from "react-router-dom";

const MockTodoFoooter = () => {
  return (
    <MemoryRouter>
      <FollowersList />
    </MemoryRouter>
  );
};

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Venla",
            last: "Rantala",
          },
          location: {
            street: {
              number: 1493,
              name: "Itsenäisyydenkatu",
            },
            city: "Alajärvi",
            state: "Northern Savonia",
            country: "Finland",
            postcode: 15245,
            coordinates: {
              latitude: "-21.7744",
              longitude: "92.8902",
            },
            timezone: {
              offset: "+5:30",
              description: "Bombay, Calcutta, Madras, New Delhi",
            },
          },
          email: "venla.rantala@example.com",
          login: {
            uuid: "fceb2407-0727-408d-97b5-974c1b2ad14a",
            username: "goldenmeercat547",
            password: "punkrock",
            salt: "DjCdF2hE",
            md5: "ade9064718b054bf71b2a102c62600d2",
            sha1: "e76a03ba8c9dab2dd14a699344f894c0df6c0d49",
            sha256:
              "98385f0093bc895b7b889c2f4ecd01b0c303dfcdc2761f76f38eab288d8ee8b9",
          },
          dob: {
            date: "1961-10-26T09:48:56.939Z",
            age: 62,
          },
          registered: {
            date: "2017-06-01T13:01:56.735Z",
            age: 6,
          },
          phone: "07-168-126",
          cell: "046-812-04-51",
          id: {
            name: "HETU",
            value: "NaNNA040undefined",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/6.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
          },
          nat: "FI",
        },
        {
          gender: "female",
          name: {
            title: "Miss",
            first: "Joy",
            last: "Stoppelenburg",
          },
          location: {
            street: {
              number: 7821,
              name: "Graaf Hendriklaan",
            },
            city: "Wittem",
            state: "Groningen",
            country: "Netherlands",
            postcode: "7345 VX",
            coordinates: {
              latitude: "21.5631",
              longitude: "126.4121",
            },
            timezone: {
              offset: "+7:00",
              description: "Bangkok, Hanoi, Jakarta",
            },
          },
          email: "joy.stoppelenburg@example.com",
          login: {
            uuid: "24068217-2be7-4a3d-89f5-70699486d16e",
            username: "happytiger685",
            password: "archie",
            salt: "czJKsFx2",
            md5: "bb6ed3346a07a0b7c636ae4152b1fb31",
            sha1: "ae0ec9324a9b48a901f86e61decda0cd6c7a9a39",
            sha256:
              "b6498d35ff1c9dc3db535f477d14ef32aacc0d416608b9bcd709d6d49286414f",
          },
          dob: {
            date: "1970-01-03T16:38:44.639Z",
            age: 53,
          },
          registered: {
            date: "2013-05-11T13:49:49.512Z",
            age: 10,
          },
          phone: "(005) 1994911",
          cell: "(06) 99676863",
          id: {
            name: "BSN",
            value: "82089572",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/85.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/85.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/85.jpg",
          },
          nat: "NL",
        },
        {
          gender: "male",
          name: {
            title: "Mr",
            first: "Edward",
            last: "Thomas",
          },
          location: {
            street: {
              number: 1045,
              name: "Blenheim Road",
            },
            city: "New Plymouth",
            state: "Auckland",
            country: "New Zealand",
            postcode: 54623,
            coordinates: {
              latitude: "27.0626",
              longitude: "-19.1571",
            },
            timezone: {
              offset: "+5:00",
              description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
            },
          },
          email: "edward.thomas@example.com",
          login: {
            uuid: "8e192ff7-f11f-4422-994d-a0feabad95d3",
            username: "heavyduck546",
            password: "flanker",
            salt: "SPAe9puS",
            md5: "cc0276edf72bf4edc9f95c9830dc1c19",
            sha1: "9a3edfeca7f12938dfb11743533cffea1bfb3bcb",
            sha256:
              "f84085f0e215ed43d3ec9175f44f3f58d7ad747f81dc3f4a8def62333ea2d49a",
          },
          dob: {
            date: "1976-04-15T19:00:48.602Z",
            age: 47,
          },
          registered: {
            date: "2011-12-22T01:34:11.580Z",
            age: 11,
          },
          phone: "(580)-275-9165",
          cell: "(984)-430-9995",
          id: {
            name: "",
            value: null,
          },
          picture: {
            large: "https://randomuser.me/api/portraits/men/2.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/2.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
          },
          nat: "NZ",
        },
        {
          gender: "female",
          name: {
            title: "Mrs",
            first: "Lucie",
            last: "Rey",
          },
          location: {
            street: {
              number: 4567,
              name: "Rue du Village",
            },
            city: "Boulogne-Billancourt",
            state: "Haute-Corse",
            country: "France",
            postcode: 45894,
            coordinates: {
              latitude: "-86.9403",
              longitude: "130.7273",
            },
            timezone: {
              offset: "+4:30",
              description: "Kabul",
            },
          },
          email: "lucie.rey@example.com",
          login: {
            uuid: "e8c4b679-dec3-44ba-9190-7ba61f45b573",
            username: "smallwolf552",
            password: "gandalf1",
            salt: "1Nnt7AUe",
            md5: "dfc9891f55271ce844cf78ab1476a988",
            sha1: "8da6a6424a3c0bf7bbfe57831f13737c76bbd922",
            sha256:
              "3af469c386d88c5091d09acd0f335a5d062cc9f7a9d6493f488af13e60b2fc03",
          },
          dob: {
            date: "1968-05-30T07:37:18.290Z",
            age: 55,
          },
          registered: {
            date: "2020-11-11T03:44:08.517Z",
            age: 2,
          },
          phone: "02-11-58-10-22",
          cell: "06-80-80-99-71",
          id: {
            name: "INSEE",
            value: "2680446910000 03",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/88.jpg",
          },
          nat: "FR",
        },
        {
          gender: "female",
          name: {
            title: "Ms",
            first: "Rose",
            last: "Lam",
          },
          location: {
            street: {
              number: 2306,
              name: "Victoria Ave",
            },
            city: "Belmont",
            state: "British Columbia",
            country: "Canada",
            postcode: "A3B 3F2",
            coordinates: {
              latitude: "-0.7986",
              longitude: "20.6822",
            },
            timezone: {
              offset: "+1:00",
              description: "Brussels, Copenhagen, Madrid, Paris",
            },
          },
          email: "rose.lam@example.com",
          login: {
            uuid: "708e04b9-f2a8-4fd6-b41e-ff96bad7a7d2",
            username: "happysnake570",
            password: "159357",
            salt: "3BMi7AgJ",
            md5: "8eff8a975d803bbb043c5df08ef32515",
            sha1: "5763d3b121fda3375ee025de0a983a14f43f30f3",
            sha256:
              "aa8206b65a7e60ef3f75820d415e1d678f842a410ae653485b8087670c6aac83",
          },
          dob: {
            date: "1967-12-09T11:47:27.965Z",
            age: 55,
          },
          registered: {
            date: "2020-07-02T12:01:43.645Z",
            age: 3,
          },
          phone: "C68 P20-0756",
          cell: "F78 Q13-6802",
          id: {
            name: "SIN",
            value: "093004273",
          },
          picture: {
            large: "https://randomuser.me/api/portraits/women/27.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/27.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/27.jpg",
          },
          nat: "CA",
        },
      ],
    }),
  },
}));

describe("Followers List", () => {
  it("should render", async () => {
    render(<MockTodoFoooter />);
    
  });
});
