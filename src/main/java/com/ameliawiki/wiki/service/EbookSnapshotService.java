package com.ameliawiki.wiki.service;

import com.ameliawiki.wiki.mapper.EbookSnapshotMapperCust;
import org.springframework.stereotype.Service;
import resp.StatisticResp;

import javax.annotation.Resource;
import java.util.List;

@Service
public class EbookSnapshotService {

    @Resource
    private EbookSnapshotMapperCust ebookSnapshotMapperCust;

    public void getSnapshot() {
        ebookSnapshotMapperCust.getSnapshot();
    }
    /**
     * 获取首页数值数据：总阅读数、总点赞数、今日阅读数、今日点赞数、今日预计阅读数、今日预计阅读增长
     */
    public List<StatisticResp> getStatistic() {
        return ebookSnapshotMapperCust.getStatistic();
    }

    /**
     * 30天数值统计
     */
    public List<StatisticResp> get30Statistic() {
        return ebookSnapshotMapperCust.get30Statistic();
    }

}


