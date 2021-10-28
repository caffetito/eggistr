import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { LOCAL_STORAGE_KEY, MONTHS, WashTypes } from '../constants';

const getCurrentYear = () => new Date().getFullYear();
const getMonth = (date) => new Date(date).getMonth();
const getYear = (date) => new Date(date).getFullYear();

const prepareRawData = (data) =>
    data.map(({ type, date }) => ({
        month: getMonth(date),
        year: getYear(date),
        type,
    }));

const prepareData = (rawData) =>
    Object.values(
        prepareRawData(rawData).reduce((result, { month, type, year }) => {
            if (year === getCurrentYear()) {
                if (!result[month])
                    result[month] = {
                        month,
                        washTypes: [],
                    };

                result[month].washTypes.push({
                    type,
                });
            }

            return result;
        }, {})
    );

const getWashCycleValue = (index, washType, washCycles) =>
    prepareData(washCycles)
        .filter((item) => item.month === index)
        .map(({ washTypes }) =>
            washTypes.filter(({ type }) => type === washType)
        )
        .flat().length;

const generateData = (washCycles) =>
    MONTHS.map((month, index) => ({
        name: month,
        cotton: getWashCycleValue(index, WashTypes.COTTON, washCycles),
        wool: getWashCycleValue(index, WashTypes.WOOL, washCycles),
        synthetic: getWashCycleValue(index, WashTypes.SYNTHETIC, washCycles),
        manual: getWashCycleValue(index, WashTypes.MANUAL, washCycles),
        feather: getWashCycleValue(index, WashTypes.FEATHER, washCycles),
        general: getWashCycleValue(index, WashTypes.GENERAL, washCycles),
    }));

const Stats = () => {
    const washCycles =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

    return (
        <div className='stats'>
            <BarChart
                width={1000}
                height={300}
                data={generateData(washCycles)}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <Tooltip />
                <Legend />
                <Bar dataKey={WashTypes.COTTON} stackId='a' fill='#FFBE0B' />
                <Bar dataKey={WashTypes.MANUAL} stackId='a' fill='#FB6376' />
                <Bar dataKey={WashTypes.WOOL} stackId='a' fill='#8338EC' />
                <Bar dataKey={WashTypes.SYNTHETIC} stackId='a' fill='#3A86FF' />
                <Bar dataKey={WashTypes.FEATHER} stackId='a' fill='#66D7D1' />
                <Bar dataKey={WashTypes.GENERAL} stackId='a' fill='#FFCCFF' />
            </BarChart>
        </div>
    );
};

export default Stats;
