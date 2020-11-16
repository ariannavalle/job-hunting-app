import React, { Component } from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'

export default class Calendar extends Component {
    render() {
        const { calendarData } = this.props;
        return (
            <ResponsiveCalendar
                data={calendarData}
                from="2020-01-02"
                to="2020-12-31"
                emptyColor="#eeeeee"
                colors={['#C2EDCF', '#71D68F', '#206E38', '#123F20']}
                margin={{ top: 0, right: 40, bottom: 40, left: -1500 }}
                yearSpacing={40}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'row',
                        translateY: 36,
                        itemCount: 4,
                        itemWidth: 42,
                        itemHeight: 36,
                        itemsSpacing: 14,
                        itemDirection: 'right-to-left'
                    }
                ]}
            />
        )
    }
}
