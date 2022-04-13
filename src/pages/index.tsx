import React, { useEffect, useState } from 'react'
import { View } from '@tarojs/components'

export default () => {
    const [Comp, setComp] = useState<any>()

    useEffect(() => {
        import('./remote/RemoteComp').then(({ RemoteComp }) => {
            setComp(RemoteComp)
        })
    }, [])

    return <View>{Comp ? Comp : null}</View>
}
