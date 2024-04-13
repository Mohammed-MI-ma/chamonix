// Booking.js
import React from "react";
import locale from "antd/locale/fr_FR";
import dayjs from "dayjs";

import "dayjs/locale/fr-ca";

import { ConfigProvider, DatePicker, Select, Space } from "antd";
import { Link, useLocation } from "react-router-dom";
dayjs.locale("fr-ca");
const Booking = () => {
  const dateFormat = "YYYY/MM/DD";
  const { pathname } = useLocation();
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleChangeChild = (value) => {
    console.log(`selected child${value}`);
  };

  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: "rgb(5, 86, 43)",
        },
      }}
    >
      <div
        className="container-fluid booking pb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="bg-white shadow" style={{ padding: "35px" }}>
            <div className="row g-2">
              <div className="col-md-10">
                <div className="row g-2">
                  <div className="col-md-3">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <DatePicker
                        size="large"
                        locale={locale}
                        style={{
                          width: "100%",
                          fontFamily: "Primary-Regular-fr",
                        }}
                        defaultValue={dayjs(
                          new Date().toISOString(),
                          dateFormat
                        )}
                        format={dateFormat}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div
                      className="date"
                      id="date1"
                      data-target-input="nearest"
                    >
                      <DatePicker
                        size="large"
                        locale={locale}
                        style={{
                          width: "100%",
                          fontFamily: "Primary-Regular-fr",
                        }}
                        defaultValue={dayjs(
                          new Date().toISOString(),
                          dateFormat
                        )}
                        format={dateFormat}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <Select
                      style={{
                        width: "100%",
                        fontFamily: "Primary-Regular-fr",
                      }}
                      defaultValue="1 personne"
                      size="large"
                      onChange={handleChange}
                      options={[
                        {
                          value: "1personne",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              1 personne
                            </div>
                          ),
                        },
                        {
                          value: "2personne",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              2 personnes
                            </div>
                          ),
                        },
                        {
                          value: "3personne",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              3 personnes
                            </div>
                          ),
                        },
                        {
                          value: "4personne",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              4 personnes
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <div
                    className="col-md-3 d-flex "
                    style={{ justifyContent: "center" }}
                  >
                    <Select
                      onChange={handleChangeChild}
                      size="large"
                      defaultValue="0child"
                      style={{
                        width: "100%",
                        fontFamily: "Primary-Regular-fr",
                      }}
                      options={[
                        {
                          value: "0child",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              Sans enfant
                            </div>
                          ),
                        },
                        {
                          value: "1child",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              1 enfant
                            </div>
                          ),
                        },
                        {
                          value: "2child",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              2 enfants
                            </div>
                          ),
                        },
                        {
                          value: "3child",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              3 enfants
                            </div>
                          ),
                        },
                        {
                          value: "4child",
                          label: (
                            <div style={{ fontFamily: "Primary-Regular-fr" }}>
                              4 enfants
                            </div>
                          ),
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <Link className="btn btn-success w-100" to="/web/guest/rooms">
                  {pathname === "/web/guest/rooms" ? (
                    <>Changer</>
                  ) : (
                    <>Valider</>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Booking;
