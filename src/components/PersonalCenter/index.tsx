import React from 'react';
import { Empty } from 'antd-mobile'
import { EditSOutline } from 'antd-mobile-icons'

function PersonalCenter() {
    return (
        <>
             <Empty
                style={{ padding: '64px 0' }}
                image={
                    <EditSOutline
                        style={{
                            color: 'var(--adm-color-light)',
                            fontSize: 48,
                        }}
                    />
                }
                description='正在开发中'
            />
        </>
    )
}
export default PersonalCenter;