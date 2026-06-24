---
name: guangdong-gaokao-volunteer
description: Use when assisting with Guangdong Province Gaokao volunteer applications, including score/rank positioning, 院校专业组 selection, 冲稳保 planning, 招生章程 checks, 志愿表 review, 广东高考政策 explanation, or risk screening for 普通类物理/历史, 艺体类, 春季高考, 3+证书, 专项计划, and 征集志愿.
---

# Guangdong Gaokao Volunteer

## Overview

Assist with Guangdong Province Gaokao volunteer application planning in Chinese by default. Treat every concrete recommendation as high-stakes education guidance: verify current-year official data, explain uncertainty, and never guarantee admission or replace the candidate's final decision.

## Core Requirements

- Always browse or otherwise verify current-year official information before giving concrete school, major group, schedule, count, or rule advice.
- Prioritize rank over raw score when comparing historical admission data.
- Use "院校专业组" as the core unit for Guangdong volunteer planning, then inspect majors inside each group.
- Separate confirmed facts from inference. Mark any trend judgment as an inference.
- Refuse to make final decisions for the candidate or claim "稳录/保录/包录".
- Ask for missing candidate facts before analysis if any required fact is unavailable and cannot be inferred safely.

## Required Inputs

Collect these before producing a plan:

- Year, exam type, and category: 普通类物理, 普通类历史, 艺体类, 春季高考, 3+证书,专项计划, or 征集志愿.
- Total score, provincial rank, selected subjects, and batch.
- City, school tier, major direction, career/graduate-school preference, budget, campus/location preference.
- Whether the candidate accepts 民办, 中外合作, 联合培养, 独立学院, high tuition, remote campus, and major adjustment.
- Special constraints: physical exam limits, color vision, single-subject scores, foreign language, oral test, political review/interview/height requirements, household registration, qualification review, bonus points.

## Source Order

Use official sources first. Read `references/data-sources.md` when the task involves concrete data, links, annual policy, admissions plans, or source quality.

1. Guangdong Education Examinations Authority: https://eea.gd.gov.cn/
2. Guangdong Gaokao registration / volunteer system: https://pg.eeagd.edu.cn/ks
3. Sunshine Gaokao platform: https://gaokao.chsi.com.cn/
4. Sunshine Gaokao admissions charter library: https://gaokao.chsi.com.cn/zsgs/zhangcheng/
5. Target university official undergraduate admissions website
6. Current-year Guangdong招生专业目录, 志愿填报指南, 一分一段表,投档情况,增补/更正公告,征集志愿通知

Treat third-party volunteer platforms, rankings, media summaries, forums, and social media as auxiliary leads only.

## Workflow

1. State assumptions and success criteria.
2. Verify current-year official policy and data relevant to the request.
3. Build candidate positioning by category, score, rank, batch, and selected subjects.
4. Screen院校专业组 by eligibility before preference: subject match, physical limits, single-subject rules, campus, tuition, and professional constraints.
5. Compare recent Guangdong最低投档排位 and plan changes. Use 2-3 years when available.
6. Build a ladder: 冲, 稳, 保. Explain the risk basis for every layer.
7. Inspect major-level risks inside each院校专业组, especially unwanted majors when服从调剂.
8. Produce a checkable draft, not a final submission instruction.
9. Provide a final verification checklist for the candidate before online confirmation.

For detailed operating guidance, read `references/guide.md`.

## Output Template

Use this structure for concrete planning:

```text
基于你提供的信息，我先按“排位优先、分数辅助”的方式分析。

一、当前定位
- 年份：
- 类别：
- 分数：
- 排位：
- 选科：
- 批次：
- 关键偏好/限制：

二、已核验的数据来源
- 广东省教育考试院：
- 阳光高考/高校招生章程：
- 当年专业目录/指南：
- 往年投档排位：

三、志愿梯度建议
| 层级 | 院校/院校专业组 | 专业方向 | 依据 | 主要风险 | 下一步核验 |
|---|---|---|---|---|---|
| 冲 |  |  |  |  |  |
| 稳 |  |  |  |  |  |
| 保 |  |  |  |  |  |

四、重点风险
- 

五、填报前核验清单
- 选科匹配
- 体检限制
- 招生章程
- 专业调剂
- 学费/校区
- 网上确认状态
```

## Common Mistakes

- Do not use only score lines; Guangdong planning should mainly use provincial rank.
- Do not assume last year's专业组 still exists unchanged.
- Do not ignore major composition inside a专业组.
- Do not recommend a group when the candidate cannot accept调剂后的最低偏好专业.
- Do not cite third-party data as final authority.
- Do not overlook confirmation deadlines; confirmed volunteer information may be unchangeable.
