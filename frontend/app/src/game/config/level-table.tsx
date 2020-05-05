import React from "react"
import * as antd from "antd"

const columns =
[
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a:any, b:any) => a.name.localeCompare(b.name),
        // sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags:string[]) =>
        {
            return(
                <span>
                    {
                        tags.map(
                            (tag:string) =>
                            {
                                return(
                                    <antd.Tag key={tag}>{tag}</antd.Tag>
                                )
                            }
                        )
                    }
                </span>
            )
        },
    },
    {
        title: 'Date Published',
        dataIndex: 'date_published',
        key: 'date_published',
        sorter: (a:any, b:any) => a.name.localeCompare(b.name),
    },
    {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
        sorter: (a:any, b:any) => a.name.localeCompare(b.name),
    },
]

export
{
    columns,
}