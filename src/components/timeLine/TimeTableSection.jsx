import React, { useEffect, useState } from "react";
import * as S from "./style";
import MiniLogo from "../../assets/images/timetable_logo.png";
import MiniLocation from "../../assets/images/timetable_location.png";
import { BoothCard } from "./boothCard/BoothCard";
import { PerfomanceCard } from "./boothCard/PerfomanceCard";

export const TimeTableSection = ({
  boothData,
  PerfomanceData,
  realtimeList
}) => {
  // 부스 데이터 시간별 정리-----------------------------
  const boothdByTime = boothData.reduce((result, item) => {
    const time = item.starttime;
    if (!result[time]) {
      result[time] = [];
    }
    result[time].push(item);
    return result;
  }, {});

  const booth12List = boothdByTime["12:00"] || [];
  const booth18List = boothdByTime["18:00"] || [];

  // 공연 데이터 시간별 정리-----------------------------
  const performdByTime = PerfomanceData.reduce((result, item) => {
    const time = item.starttime;
    if (!result[time]) {
      result[time] = [];
    }
    result[time].push(item);
    return result;
  }, {});

  const perform14List = performdByTime["14:00"] || [];
  const perform18List = performdByTime["18:00"] || [];

  // 실시간 공연 정보 3초 단위로 띄움-----------------------------
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % realtimeList.length);
    }, 3000);
    console.log(currentIndex);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 시간 바에서 현재 위치 계산 -----------------------------
  const currentTime = new Date(); // 현재 시간
  const startTime = new Date("2023-09-29 12:00"); // TimeStroke 시작 시간
  const timeDifference = currentTime - startTime;

  const elapsedMinutes = timeDifference / (1000 * 60); // 분 단위

  let imagePosition = 0; // 이미지의 초기 위치 (12:00)
  if (elapsedMinutes >= 0 && elapsedMinutes <= 600) {
    // 12:00 이후부터 22:00 이전까지
    imagePosition = `${(elapsedMinutes / (10 * 60)) * 100}%`;
  } else if (elapsedMinutes < 0) {
    // 12:00 이전
    imagePosition = 0;
  } else {
    // 22:00 이후
    imagePosition = "100%";
  }

  return (
    <S.TimeTableWrapper>
      <S.TimeTableNav>
        <S.TimeTableSubTxt>
          <img src={MiniLogo} alt="Logo" />
          실시간
        </S.TimeTableSubTxt>
        <S.TimeTableMainTxt>
          {realtimeList.length !== 0
            ? realtimeList[currentIndex].title
            : "없음"}
        </S.TimeTableMainTxt>
        <S.TimeTableSubTxt2>
          <S.LocationIMG src={MiniLocation} alt="Logo" />
          {realtimeList.length !== 0
            ? realtimeList[currentIndex].place
            : "없음"}
        </S.TimeTableSubTxt2>
      </S.TimeTableNav>
      <S.SubNav>
        <div>
          <S.TimeTableBigTxt>부스</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Booth</S.TimeTableSmalltxt>
        </div>
        <div>
          <S.TimeTableBigTxt>공연</S.TimeTableBigTxt>
          <S.TimeTableSmalltxt>Performance</S.TimeTableSmalltxt>
        </div>
      </S.SubNav>
      <S.BoothDetailSection>
        {/* 부스 목록 */}
        <S.BoothLeft>
          <S.BoothTimeSection>12:00 ~ 18:00</S.BoothTimeSection>
          {booth12List.map(booth => (
            <BoothCard booth={booth} />
          ))}

          <S.BoothTimeSection style={{ marginTop: "45%" }}>
            18:00 ~ 22:00
          </S.BoothTimeSection>
          {booth18List.map(booth => (
            <BoothCard booth={booth} />
          ))}
        </S.BoothLeft>
        {/* 공연 목록 */}
        <S.BoothRight>
          <S.PerformTimeSection isnow="true" style={{ marginTop: "30%" }}>
            14:00 ~ 16:00
          </S.PerformTimeSection>
          {perform14List.map(booth => (
            <PerfomanceCard booth={booth} />
          ))}
          <S.PerformTimeSection style={{ marginTop: "100%" }}>
            18:00 ~ 21:00
          </S.PerformTimeSection>
          {perform18List.map(booth => (
            <PerfomanceCard booth={booth} />
          ))}
        </S.BoothRight>
        <S.TimeStroke>
          <S.TimeNow
            src="/timetable/realtime.png"
            style={{ top: imagePosition }}
          />
          <S.TimeStart />
          <S.TimeMid />
          <S.TimeEnd />
        </S.TimeStroke>
      </S.BoothDetailSection>
    </S.TimeTableWrapper>
  );
};