import * as Tabs from "@radix-ui/react-tabs"
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { TabItem } from "./TabItem"
import { useState } from "react"
import { RequestCard } from "../RequestCard"

export function SettingsTabs() {

    const [currentTab, setCurrentTab] = useState("pending")

    return (
        <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
            <ScrollArea.Root className="w-full" type="scroll">
                <ScrollArea.Viewport className="w-full overflow-x-scroll">
                    <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
                        <TabItem
                            value="pending"
                            title="Pending"
                            isSelected={currentTab === 'pending'}
                        />
                        <TabItem
                            value="progress"
                            title="Progress"
                            isSelected={currentTab === 'progress'}
                        />
                        <TabItem
                            value="approved"
                            title="Approved"
                            isSelected={currentTab === 'approved'}
                        />

                        <TabItem
                            value="rejected"
                            title="Rejected"
                            isSelected={currentTab === 'rejected'}
                        />
                    </Tabs.List>
                </ScrollArea.Viewport>

                <Tabs.Content value="pending">
                    <RequestCard.Root>
                        <RequestCard.Item
                            name="Rafael Amaro"
                            edv="428374"
                            type="pending"
                        />

                        <RequestCard.Item
                            name="Rodrigo Stinghen"
                            edv="547421"
                            type="pending"
                        />

                        <RequestCard.Item
                            name="Lucas Chaves"
                            edv="575432"
                            type="pending"
                        />
                    </RequestCard.Root>
                </Tabs.Content>
                <Tabs.Content value="progress">
                    <RequestCard.Root>
                        <RequestCard.Item
                            name="Carlos Silva"
                            edv="428374"
                            type="ongoing"
                        />

                        <RequestCard.Item
                            name="João Vitor"
                            edv="084832"
                            type="ongoing"
                        />

                    </RequestCard.Root>

                    {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-x-6 gap-y-4">
                        <div className="flex justify-between items-center bg-zinc-100 rounded-md border-l-6 border-l-yellow-400 p-4 hover:bg-zinc-200 hover:cursor-pointer">
                            <div className="flex flex-col">
                                <div className="font-medium text-zinc-800">Rafael Amaro - 294837</div>
                                <div className="flex items-center font-thin space-x-1 text-zinc-500">
                                    <Clock size={14} />
                                    <span>20/01/2023 às 15:23</span>
                                </div>
                            </div>
                            <div className="rounded-full bg-white p-2">
                                <Hourglass className="text-yellow-400" size={18} />
                            </div>
                        </div>
                    </div> */}
                </Tabs.Content>
                <Tabs.Content value="rejected">
                    <RequestCard.Root>
                        <RequestCard.Item
                            name="Rafael Amaro"
                            edv="102394"
                            type="rejected"
                        />

                        <RequestCard.Item
                            name="Marcelo Penchiari"
                            edv="958432"
                            type="rejected"
                        />

                        <RequestCard.Item
                            name="Felipe Oshiro"
                            edv="593483"
                            type="rejected"
                        />

                    </RequestCard.Root>
                </Tabs.Content>

                <Tabs.Content value="approved">
                    <RequestCard.Root>
                        <RequestCard.Item
                            name="Luiz Amélio"
                            edv="958493"
                            type="success"
                        />

                        <RequestCard.Item
                            name="Gabriel Cabral"
                            edv="505948"
                            type="success"
                        />

                        <RequestCard.Item
                            name="João Silva"
                            edv="0594837"
                            type="success"
                        />

                        <RequestCard.Item
                            name="Micael Galvão"
                            edv="594837"
                            type="success"
                        />

                        <RequestCard.Item
                            name="Tainan Duarte"
                            edv="504938"
                            type="success"
                        />

                    </RequestCard.Root>
                </Tabs.Content>

                <ScrollArea.Scrollbar
                    className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
                    orientation="horizontal"
                >
                    <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
                </ScrollArea.Scrollbar>
            </ScrollArea.Root>
        </Tabs.Root>
    )
}