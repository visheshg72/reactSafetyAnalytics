//@ts-nocheck
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useDispatch, useSelector } from 'react-redux';
import { getModelWiseClaimsData } from '../../../lib/features/chartSlice';
import { modelWiseClaims1 } from '../../../dummyData/chart';

const ModalWiseClaims = () => {
  const dispatch = useDispatch();
  const modelWiseClaims = useSelector(
    (state: any) => state.chart.modelWiseClaims
  );

  const [options, setOptions] = useState({
    chart: {
      type: 'column',
      ignoreHiddenSeries: true,
    },
    title: {
      text: ' ',
      align: 'left',
    },
    subtitle: {
      text: 'Model-wise Claims',
      align: 'left',
    },
    plotOptions: {
      column: {
        grouping: false,
        pointPlacement: null,
      },
    },
    exporting: {
      buttons: {
        contextButton: {
          symbol: 'url(/dots.png)',
          symbolY: 22,
          symbolX: 22,
          x: -10,
        },
      },
    },
    xAxis: {
      categories: [],
      startOnTick: true,
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      gridLineColor: 'transparent',
      title: {
        text: ' ',
      },
    },
    legend: {
      symbolRadius: 0,
    },
    series: [],
  });
  useEffect(() => {
    // @ts-ignore
    dispatch(getModelWiseClaimsData());
  }, []);

  useEffect(() => {
    if (modelWiseClaims1?.info?.categories && modelWiseClaims1?.info?.series) {
      const categories = modelWiseClaims1.info.categories;
      const series = modelWiseClaims1.info.series;
      const opt = {
        ...options,
        xAxis: {
          ...options.xAxis,
          categories: categories,
        },
        series: JSON.parse(JSON.stringify(series)),
      };

      setOptions(opt);
    }
  }, [modelWiseClaims1]);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default ModalWiseClaims;
